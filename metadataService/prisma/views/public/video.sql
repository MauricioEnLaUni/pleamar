SELECT
  v.id AS video,
  v.type AS extension,
  v.uploader AS autor,
  s.estado,
  m.duracion,
  m."tamaño",
  t.titulo,
  d.descripcion,
  w.vistas
FROM
  (
    (
      (
        (
          (
            video_entity v
            JOIN (
              SELECT
                DISTINCT ON (statuses.video) statuses.video AS id,
                statuses.current AS estado
              FROM
                statuses
              ORDER BY
                statuses.video,
                statuses.added DESC
            ) s ON ((v.id = s.id))
          )
          JOIN (
            SELECT
              DISTINCT ON (video_metadata.video) video_metadata.video AS id,
              video_metadata.length_ms AS duracion,
              video_metadata.file_size AS "tamaño"
            FROM
              video_metadata
            ORDER BY
              video_metadata.video,
              video_metadata.added DESC
          ) m ON ((v.id = m.id))
        )
        JOIN (
          SELECT
            DISTINCT ON (video_titles.video) video_titles.video AS id,
            video_titles.content AS titulo
          FROM
            video_titles
          ORDER BY
            video_titles.video,
            video_titles.added DESC
        ) t ON ((v.id = t.id))
      )
      JOIN (
        SELECT
          DISTINCT ON (video_description.video) video_description.video AS id,
          video_description.content AS descripcion
        FROM
          video_description
        ORDER BY
          video_description.video,
          video_description.added DESC
        LIMIT
          1
      ) d ON ((v.id = d.id))
    )
    JOIN (
      SELECT
        views.owner AS id,
        count(views.owner) AS vistas
      FROM
        views
      GROUP BY
        views.owner
    ) w ON ((v.id = w.id))
  );