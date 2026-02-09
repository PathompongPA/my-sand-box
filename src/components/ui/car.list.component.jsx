import { useLoaderData } from "react-router-dom";
import { Box, Flex, Reveal, Title } from "../materials";
import CardCar from "./car.card.component";
import { cva } from "class-variance-authority";

let listStyle = cva(" grid  grid-cols-2 lg:grid-cols-6 bg-white  gap-2 ")

export default function ListCar({ className }) {
    const loader = useLoaderData();
    return (
        <Box className={listStyle({ className })}>
            {loader?.car?.map(({ carName: name, brand, carDescription: description, carThumbnail: thumbnail, offers }, index) =>
                <CardCar name={name} brand={brand.brandName} description={description} thumbnail={thumbnail} offer={offers[0]} key={index} />
            )}
        </Box>
    )
};
