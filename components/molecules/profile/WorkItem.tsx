'use client';
import React, { FC, memo, useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia, Modal } from "@mui/material";


type Props = {
  title: string;
  description: string;
  image: string;
  url: string;
  detailDescription: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const WorkItem: FC<Props> = memo((props) => {
  const { title, description, image, url, detailDescription } = props;
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box component={"a"} href={url} target={'_blank'}>
        <Card sx={{ maxWidth:350, width:'100%', mb:2 }}>
          <CardMedia
            component="img"
            alt={ title }
            height="140"
            image={ image } />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight:700, fontSize:"24px"}}>{ title }</Typography>
            <Typography variant="body2">{ description }</Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small" onClick={handleOpen}>Learn More</Button>
          </CardActions> */}
        </Card>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">{ title }</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>{ detailDescription}</Typography>
          </Box>
        </Modal>
      </Box>
    </>
  )
});
WorkItem.displayName = 'WorkItem';