"use client";

import { TodoItem } from "@/components/TodoItem";
import { Item } from "@/types/Item";
import { KeyboardEvent, useState } from "react";

const Page = () => {
	const [list, setList] = useState<Item[]>([]);
	const [input, setInput] = useState('');
	const [recentlyUpdatedItem, setRecentlyUpdatedItem] = useState<null | number>(null);

	const handleAddItem = (id:number) => {
		setRecentlyUpdatedItem(id)
		setList(state => [
			...state, {
			id:id, name:input, done:false
		}].sort((a,b) => Number(a.done) - Number(b.done))
		)
		setInput('')
		setTimeout(() => setRecentlyUpdatedItem(null), 300);
	};

	const handleKeyUp = (event: KeyboardEvent) => {
		if (event.code === "Enter") {
			handleAddItem(list.length+1);
		}
	};
	
	const handleToggleDone = (id:number, done:boolean)=> {
		setRecentlyUpdatedItem(id); // Define o ID do item atualizado

		 // Primeiro atualiza o estado para refletir a mudança sem ordenar ainda
		setList((prevList) =>
			[...prevList].map((item) => (item.id === id ? { ...item, done } : item))
		);
         // Aguarda 300ms para ordenar a lista (tempo da animação de "levantar")
    	setTimeout(() => {
			setList((prevList) =>
				[...prevList].sort((a, b) => Number(a.done) - Number(b.done))
			);
			setTimeout(() => setRecentlyUpdatedItem(null), 300);  // Reseta o ID do item animado depois de tudo
		}, 300); // Tempo da transição definida em Tailwind (300ms)
		
    };

	return (
		<div className="bg-[#17181F] min-h-screen">
			<div className="m-auto max-w-[980px] p-2">
				<header className="m-0 p-0 text-white text-center border-b-[#444] pb-5 font-bold text-2xl">
					Lista de Tarefas 
				</header>
				<main >
					<div className="flex w-full justify-center items-center mb-3">
						<div className="flex w-[50%] border border-zinc-600 rounded-md items-center">
							<input
								type="text"
								title="input"
								className=" rounded-md p-2 border-0 outline-0 bg-transparent text-2xl flex-1 text-[#bdbdbd]"
								value={input}
								onChange={e=> setInput(e.target.value)}
								onKeyUp={handleKeyUp}
							/>
							<div className=" text-white px-2 ml-2 text-3xl font-bold cursor-pointer" onClick={()=>handleAddItem(list.length+1)}>+</div>
						</div>
					</div>
					<ul className="flex flex-col w-full justify-center items-center gap-2 transition-all duration-500">
						{list.map((item)=> (
							<TodoItem item={item} key={item.id} toggleDone={handleToggleDone} itemMoving={recentlyUpdatedItem === item.id}/>
						))}
					</ul>
				</main>
			</div>
		</div>
	);
}

export default Page;