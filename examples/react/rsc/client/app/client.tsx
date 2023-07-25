/// <reference types="vinxi/client" />
import { createModuleLoader } from "@vinxi/react-server-dom-vite/runtime";
import React, { Suspense, startTransition } from "react";
import { Root, createRoot, hydrateRoot } from "react-dom/client";
import "vinxi/runtime/client";

import { ServerComponent } from "./server-component";

globalThis.__vite__ = createModuleLoader({
	loadModule: async (id) => {
		return import(
			/* @vite-ignore */ import.meta.env.MANIFEST["client"].inputs[id].output
				.path
		);
	},
});

createRoot(document).render(<ServerComponent url={window.location.pathname} />);