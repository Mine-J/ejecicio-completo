import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"

import Character from "../../components/characterNamePhoto.tsx";

type character = {
    id:string;
    name: string;
    image:string;
    
}

export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, character[]>) => {
        const { name } = ctx.params;
        const characters = await Axios.get<character[]>(`https://rickandmortyapi.com/api/character?name=${name}`)
        return ctx.render(characters.data.results)
    }
}

const page = (props: PageProps<character[]>) => {
    const personajes = props.data;
    
    return (
        <div class="contenedor">
            {personajes.map((personaje) => (
                <Character key={personaje.id} id={personaje.id} name={personaje.name} image={ personaje.image} />
            ))}
        </div>
    );
}
export default page