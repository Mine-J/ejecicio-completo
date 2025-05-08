import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";
import Axios from "npm:axios";

export const Header: FunctionalComponent = () => {
  const [on, setOn] = useState<boolean>(false);
  const [data, setData] = useState<string>("");
  const [ultimaBusqueda, setUltimaBusqueda] = useState<string>("");

  const onOff = async (data: string) => {
    if (!on) {
      setOn(true);
    } else if (on && data === "") {
      setOn(false);
    } else if (on && data !== "") {
      if (ultimaBusqueda === data) {
        return;
      } else {
        setUltimaBusqueda(data);

        if (data.trim() !== "") {
          globalThis.location.href = `/busqueda/${data}`;
        }
      }
    }
  };
  return (
    <div class="header">
      
      <div class = "buscador">
        {on && (
        <input
          type="text"
          value={data}
          onInput={(e) => setData(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onOff(data);
            }
          }}
        />
      )}
      <button class="botonBuscador" onClick={(e) => onOff(data)}>
        <img src="/lupa.png" alt="lupa" />
      </button>
      </div>
      <div class = "casa">
        <a href="/">
          <img  src="/casa.png" alt="foto" />
        </a>
      </div>
    </div>
  );
};
