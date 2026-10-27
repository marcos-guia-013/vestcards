import localforage from 'localforage';import type{Exam,Attempt}from './types';
const db=localforage.createInstance({name:'vestcards',storeName:'exams'});
export async function getImports():Promise<Exam[]>{return await db.getItem<Exam[]>('imports')||[]}
export async function addImport(exam:Exam,pdf:Blob){const exams=await getImports();await db.setItem('pdf:'+exam.id,pdf);await db.setItem('imports',[exam,...exams.filter(e=>e.id!==exam.id)])}
export async function removeImport(id:string){await db.removeItem('pdf:'+id);await db.setItem('imports',(await getImports()).filter(e=>e.id!==id))}
export async function getPdf(id:string){return db.getItem<Blob>('pdf:'+id)}
export function getAttempts(id:string):Record<string,Attempt>{try{return JSON.parse(localStorage.getItem('vc:attempts:'+id)||'{}')}catch{return{}}}
export function saveAttempts(id:string,attempts:Record<string,Attempt>){localStorage.setItem('vc:attempts:'+id,JSON.stringify(attempts))}
