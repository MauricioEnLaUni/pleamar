type Props = {
    where?: any,
    take?: number,
    select?: any,
    include?: any,
    orderBy?: any,
    skip?: number,
    distinct?: any,
    cursor?: any,
}

export default ({
    where,
    take,
    select,
    orderBy,
    skip,
}: Props) => ({
    where: {
        estado: "ACTIVE",
        ... where
    },
    take: take ?? 25,
    select: {
        ... select,
    },
    orderBy: orderBy,
    skip: skip ?? 0,
});
