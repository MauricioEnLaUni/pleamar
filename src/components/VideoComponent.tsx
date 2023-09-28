"use client"
/// <reference path ="./Video.d.ts" />
import react from "react";

const VideoComponent = ({ video }: VideoComponentProps) => {
    const { measurements, metadata, url } = video;

    return(
        <div className="prose outline">
            <video className="outline" width={`${ measurements.width}px`} height={`${measurements.height}px`} controls>
                <source src={`${url}.mp4`} type="video/mp4" />
                <source src={`${url}.ogg`} type="video/ogg" />
                <source src={`${url}.webm`} type="video/webm" />
                Video has not been found.
            </video>
            <h1 className="outline" >{ metadata.name }</h1>
            <p className="outline" >{ metadata.description }</p>
            <div className="outline" >
                <p className="outline" >{ metadata.author }</p>
            </div>
            <p className="outline" >{ metadata.length }</p>
            <TagList tags={metadata.tags} />
        </div>
    );
}

const TagList = ({ tags }: { tags: string[] }) => (
    tags.map((tag, index) => <a href={tag} key={index}>{ tag }</a>)
);

export default VideoComponent;