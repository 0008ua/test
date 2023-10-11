type Task = {
  id: number;
  text: string;
  completed?: boolean;
}

type ComplicatedTask = {
  id: number;
  text: string;
  completed?: boolean;
  isComplicated: boolean;
}

// Readonly

// members cannot be changed outside the class,
// they either need to be initialized at declaration or
// initialized inside the class constructor.
type TaskReadonly = Readonly<Task>;


// Partial

// all fields optional
// useful for patch
type TaskPartial = Partial<Task>;

// Required

// all fields required
type TaskRequired = Required<Task>;

// Pick (result object shape)

// pick some fields (generates new type, but without some fields)
type TaskPick = Pick<Task, 'id' | 'text'>;

// Omit

// omit some fields, opposite to pick
type TaskOmit = Omit<Task, 'completed'>;

// Record

// construct objects <type of key, type of value>
type TaskRecord1 = Record<keyof Task, number | string | boolean>;
type TaskRecord2 = Record<'id' | 'text' | 'completed', number | string | boolean>;
type TaskRecord3 = Record<'task1' | 'task2', Task>;
// const taskRecord2: TaskRecord2 = {
//   id: 22,
//   text: 'xx',
//   completed: true,
// }
// const taskRecord3: TaskRecord3 = {
//   task1: {
//     id: 22,
//     text: 'xx',
//     completed: true,
//   },
//   task2: {
//     id: 22,
//     text: 'xx',
//     completed: true,
//   }
// }

// Exclude (result union type)

// exclude one type from another
type TaskExclude = Exclude<keyof Task, 'completed'>;

// Extrtact (result union type)

// intercection of two types
type TaskExtract = Extract<keyof Task, keyof ComplicatedTask>;

// NonNullable

// exclude all 'nullable' types
type TypeNonNullable = NonNullable<string | null | undefined>

// ReturnType

// auto recognize type
type TypeReturnType = ReturnType<typeof fn>
function fn(n: string, x: number) { return parseInt(n) }

// Parameters

// auto return type of function parameters
type TypeParameters = Parameters<typeof fn>

// Awaited

// recursevly spin off chain of promises and return type of result
type TaskAwaited = Awaited<ReturnType<typeof promiseFn>>
function promiseFn (){
  return new Promise<number>((resolve) => resolve(10))
}

// Uppercase, Lowercase, Capitalize, Uncapitalize




function patchField<T extends object, U extends keyof T>(obj: T, field: U, value: T[U]): T {
  obj[field] = value;
  return obj;
}

const patched = patchField({f: 1}, 'f', 3);

console.log(patched)