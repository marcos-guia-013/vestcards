export type Area='Linguagens'|'Humanas'|'Matemática'|'Natureza'|'Não classificada';
export type Question={id:string;number:number;page:number;answer:string;area:Area;statement?:string};
export type Exam={id:string;name:string;institution:string;year:string;subtitle:string;source:'builtin'|'imported';questions:Question[];pages:number;createdAt:number};
export type Attempt={choice:string;correct:boolean;at:number};
export type Mode='all'|'wrong'|'unanswered';
