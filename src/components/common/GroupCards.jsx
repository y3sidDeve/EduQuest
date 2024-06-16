import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
const GroupCards = (props) => {
  return (
    <>
      {props.dataCards.map((card, index) => (
        <Card key={index} shadow className="w-[300px] light mb-3">
          <CardHeader className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {card.user.name}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                {card.user.studyClass}
              </h5>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>
              {card.title}
            </p>
            <span className="pt-2">
                {card.text}
            </span>
          </CardBody>

          <CardFooter>
            {card.alt}
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default GroupCards;
