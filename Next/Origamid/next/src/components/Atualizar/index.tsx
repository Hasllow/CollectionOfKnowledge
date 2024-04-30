"use client";

import {
  revalidatePathAction,
  revalidateTagAction,
} from "@/actions/ReavalidatePath";
import { useEffect } from "react";

export default function Atualizar() {
  function handleClick() {
    revalidateTagAction("acoes");
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      revalidatePathAction("/acoes");
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <button onClick={handleClick}>Atualizar</button>;
}
