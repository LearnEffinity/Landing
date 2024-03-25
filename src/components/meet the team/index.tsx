"use client";
import React, { useState } from "react";
import Header from "./header";
import Carousel from "./carousel";
import ChipTabs from "./tabs";

export default function MeetTheTeam() {
  const [selected, setSelected] = useState("Developers");
  return (
    <>
      <Header />
      <ChipTabs selected={selected} setSelected={setSelected} />
      <Carousel selected={selected} />
    </>
  );
}
