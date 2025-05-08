import { PageProps } from "$fresh/server.ts";
import { Header } from "../islands/Header.tsx";

export default function Layout({ Component }: PageProps) {
  // do something with state here
  return (
    <div class="layout">
      <Header />
      <Component />
    </div>
  );
}
