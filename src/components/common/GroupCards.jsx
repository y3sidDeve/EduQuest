import React from "react";

import { Card, CardBody, Image } from "@nextui-org/react";

const GroupCards = (props) => {
  return (
    <>
      {props.dataCards.map((card, index) => (
        <Card
          key={index}
          className="border-none bg-background/60 light max-w-[610px]"
          shadow="sm"
          isFooterBlurred
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="flex justify-center col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover hidden md:block"
                  height={200}
                  src="https://via.placeholder.com/150"
                  width="80%"
                  radius="full"
                />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-foreground/90">
                      {" "}
                      {card.user.name}{" "}
                    </h3>
                    <p className="text-small text-foreground/50">
                      {" "}
                      {card.user.studyClass}{" "}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mt-3 gap-1">
                  <p className="text-foreground/80"> {card.text} </p>
                  <p className="text-sm text-foreground/25"> {card.date} </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default GroupCards;
