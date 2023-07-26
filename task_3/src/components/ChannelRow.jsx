import { Avatar } from "@mui/material";
import { CheckCircleOutlined } from "@mui/icons-material";
import React from "react";
import "../assets/ChannelRow.css";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className='channelRow'>
      <Avatar src={image} alt={channel} className='channelRow__logo' />

      <div className='channelRow__text'>
        <h4>
          {channel} {verified && <CheckCircleOutlined />}
        </h4>

        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
