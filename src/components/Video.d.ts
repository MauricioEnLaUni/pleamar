type VideoComponentProps = {
    video: Video;
}

type MetaData = {
    author: string;
    name: string;
    id: string;
    tags: string[];
    length: number;
    description: string;
}

type Measurements = {
    width: number;
    height: number;
}

type Video = {
    metadata: MetaData;
    measurements: Measurements;
    url: string;
}