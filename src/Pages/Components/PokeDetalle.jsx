import React, { useEffect, useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {useQueryPokeDetalle} from "../../queries/queryPokeDetalle";
import { Link, useParams, ScrollRestoration } from "react-router-dom";

export default function PokeDetalle() {
//const [params, setParams]=useState({valor: ''})
const params = useParams();

  const { data: poke, isError: hayError } = useQueryPokeDetalle({valor: params.pokeId});
  
  const handleInputChangeLimit = (event) => {
    const { name, value } = event.target;
    setParams({ valor : value});

  };
  

  const generaRandom = () => {
    let random = Math.floor(Math.random() * (2000 - 1));
    setParams({valor : random})
  };

  return (
    <>
      <input name="limitMax" onChange={handleInputChangeLimit}></input>
      <Link to={`/`} preventScrollReset={true} >Volver</Link>

      {hayError && <Alert severity="error">ese pokemon no existe</Alert>}
      <Card>
        <CardMedia sx={{maxWidth: 300}} component="img" image={poke?.sprites.front_default} />

        <CardContent>
          numero : {poke?.id} <br />
          nombre : {poke?.name}
          <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header">
            <Typography>Ver stats</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
              peso: {poke?.weight}
          </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
}