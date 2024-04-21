import { ProgramHero } from "@/components/custom/ProgarmHero";
import { appStringMap } from "@appString/appStringMap";
import { ShowCase } from "@/components/custom/ShowCase";

export default function WellnessPrograms() {
  const {
    pages: { SecondInningsWellnessPrograms },
  } = appStringMap;
  return <><ProgramHero {...SecondInningsWellnessPrograms.hero} />
  <ShowCase /></>;
}
