import React from "react";
import { ReactLogo, Nodejs } from "@styled-icons/boxicons-logos";
import { JsSquare, GithubSquare } from "@styled-icons/fa-brands";
import { Reactjs } from "@styled-icons/remix-line";
import { Html5 } from "@styled-icons/typicons";
import {
  NextDotJs,
  Redux,
  ReduxSaga,
  Csswizardry,
  StyledComponents,
  Docker,
  Babel,
  Webpack,
  Storybook,
  Typescript,
  Cypress,
  Tailwindcss,
} from "@styled-icons/simple-icons";

import { ShadowContainer } from "./styles";

function IconCard(props) {
  const { dropShadowColor, icon, title } = props;
  return (
    <div className="w-min p-4">
      <ShadowContainer
        className="rounded-full bg-gray-100 w-min mx-auto"
        color={dropShadowColor}
      >
        {icon}
      </ShadowContainer>
      <p className="text-center mt-2">{title}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <div class="p-2 flex flex-wrap justify-center mb-20">
      {/* ---------- REACT ------------ */}
      <IconCard
        dropShadowColor="#61dafb"
        icon={
          <ReactLogo className="h-20 w-20 p-3 hover:text-react  text-night hover:scale-105 transform duration-200" />
        }
        title="React"
      />
      {/* ---------- REACT ------------ */}
      {/* ---------- Next Js ------------ */}
      <IconCard
        dropShadowColor="#fafafa"
        icon={
          <NextDotJs className="h-20 w-20 p-4  hover:text-dusk  text-night hover:scale-105 transform duration-200" />
        }
        title="Next.js"
      />
      {/* ---------- Next Js ------------ */}
      {/* ---------- JS ------------ */}
      <IconCard
        dropShadowColor="#efd819"
        icon={
          <JsSquare className="h-20 w-20 p-4 hover:text-js  text-night hover:scale-105 transform duration-200" />
        }
        title="JavaScript"
      />
      {/* ---------- JS ------------ */}
      {/* ---------- HTML ------------ */}
      <IconCard
        dropShadowColor="#ea6328"
        icon={
          <Html5 className="h-20 w-20 p-3 hover:text-html  text-night hover:scale-105 transform duration-200" />
        }
        title="HTML"
      />
      {/* ---------- HTML ------------ */}
      {/* ---------- CSS ------------ */}
      <IconCard
        dropShadowColor="#2763e9"
        icon={
          <Csswizardry className="h-20 w-20 p-5 hover:text-css  text-night hover:scale-105 transform duration-200" />
        }
        title="CSS"
      />
      {/* ---------- CSS ------------ */}
      {/* ---------- Redux ------------ */}
      <IconCard
        dropShadowColor="#7248b6"
        icon={
          <Redux className="h-20 w-20 p-4 hover:text-redux  text-night hover:scale-105 transform duration-200" />
        }
        title="Redux"
      />
      {/* ---------- Redux ------------ */}
      {/* ---------- ReduxSaga ------------ */}
      <IconCard
        dropShadowColor="#84d269"
        icon={
          <ReduxSaga className="h-20 w-20 p-4 hover:text-saga  text-night hover:scale-105 transform duration-200" />
        }
        title="Redux Saga"
      />
      {/* ---------- ReduxSaga ------------ */}
      {/* ---------- ReactN ------------ */}
      <IconCard
        dropShadowColor="#61dafb"
        icon={
          <Reactjs className="h-20 w-20 p-4 hover:text-react  text-night hover:scale-105 transform duration-200" />
        }
        title="React Native"
      />
      {/* ---------- ReactN ------------ */}
      {/* ---------- StyledComponents ------------ */}
      <IconCard
        dropShadowColor="#d76c8d"
        icon={
          <StyledComponents className="h-20 w-20 p-4 hover:text-styled-components text-night hover:scale-105 transform duration-200" />
        }
        title="Styled Components"
      />
      {/* ---------- StyledComponents ------------ */}
      {/* ---------- GithubSquare ------------ */}
      <IconCard
        dropShadowColor="#161b22"
        icon={
          <GithubSquare className="h-20 w-20 p-4 hover:text-git text-night hover:scale-105 transform duration-200" />
        }
        title="Git"
      />
      {/* ---------- GithubSquare ------------ */}
      {/* ---------- Storybook ------------ */}
      <IconCard
        dropShadowColor="#ff4685"
        icon={
          <Storybook className="h-20 w-20 p-5 hover:text-story-book text-night hover:scale-105 transform duration-200" />
        }
        title="Storybook"
      />
      {/* ---------- Storybook ------------ */}
      {/* ---------- Tailwindcss ------------ */}
      <IconCard
        dropShadowColor="#ff4685"
        icon={
          <Tailwindcss className="h-20 w-20 p-5 hover:text-tailwind text-night hover:scale-105 transform duration-200" />
        }
        title="Tailwind css"
      />
      {/* ---------- Tailwindcss ------------ */}
      {/* ---------- Nodejs ------------ */}
      <IconCard
        dropShadowColor="#72ab63"
        icon={
          <Nodejs className="h-20 w-20 p-4 hover:text-node text-night hover:scale-105 transform duration-200" />
        }
        title="Node.js"
      />
      {/* ---------- Nodejs ------------ */}
      {/* ---------- Docker ------------ */}
      <IconCard
        dropShadowColor="#2496ec"
        icon={
          <Docker className="h-20 w-20 p-4 hover:text-docker text-night hover:scale-105 transform duration-200" />
        }
        title="Docker"
      />
      {/* ---------- Docker ------------ */}
      {/* ---------- Webpack ------------ */}
      <IconCard
        dropShadowColor="#8bcef1"
        icon={
          <Webpack className="h-20 w-20 p-4 hover:text-webpack text-night hover:scale-105 transform duration-200" />
        }
        title="Webpack"
      />
      {/* ---------- Webpack ------------ */}
      {/* ---------- Babel ------------ */}
      <IconCard
        dropShadowColor="#f9dc3c"
        icon={
          <Babel className="h-20 w-20 p-5 hover:text-babel text-night hover:scale-105 transform duration-200" />
        }
        title="Babel"
      />
      {/* ---------- Babel ------------ */}
      {/* ---------- Cypress ------------ */}
      <IconCard
        dropShadowColor="#47474a"
        icon={
          <Cypress className="h-20 w-20 p-4 hover:text-cypress text-night hover:scale-105 transform duration-200" />
        }
        title="Cypress"
      />
      {/* ---------- Cypress ------------ */}
      {/* ---------- Typescript ------------ */}
      <IconCard
        dropShadowColor="#3074bf"
        icon={
          <Typescript className="h-20 w-20 p-5 hover:text-ts text-night hover:scale-105 transform duration-200" />
        }
        title="Typescript"
      />
      {/* ---------- Typescript ------------ */}
    </div>
  );
}
