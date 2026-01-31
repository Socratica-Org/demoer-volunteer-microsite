"use client";
import { useParams } from "next/navigation";
import LetterPage from "../components/LetterPage";

export default function DemoerPage() {
  const { demoer } = useParams();

  return <LetterPage demoerName={demoer as string | undefined} />;
}
