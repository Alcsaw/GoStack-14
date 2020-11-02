# Nível 01
## TypeScript

Este módulo apresentou os benefícios da utilização de TypeScript para o desenvolvimento e praticamos a definição de algumas tipagens para uma aplicação bem simples de exemplo.

### Características interessantes aprendidas:
#### Dynamic Properties
Quando, além das propriedades que declaradas, permite-se que novas propriedades de um certo tipo sejam sejam adicionadas em tempo de uso:
```
interface User {
	name: string;
	email: string;
	[propName: string]: string;
}
```
Nesse exemplo, temos uma interface `User` na qual, além das 2 propriedades que definidas, deixamos em aberto a possibilidade de *N* novas propriedades de nome `propName`, uma string que o usuário quiser, cujo valor também é do tipo string. Assim, o usuário poderia criar um usuário da seguinte forma:

```
const alcsaw: User = {
	name: "Augusto Schnorr",
	email: "alcsaw@hotmail.com",
	nickname: "Alcsaw",
	location: "Rio Grande do Sul"
}
```

#### Enums
```
enum Techs {
	React,
	Angular,
	Vue
};
const theBest: Techs = Techs.React;
console.log(theBest) // Irá printar o valor 0
```

#### Readonly Properties
```
interface Avengers {
	readonly thanos: string;
}

let theEnd: Avengers = { thanos: "I'm inevitable" }
theEnd.thanos = "I'm not inevitable" // erro
```

#### Implements
```
interface BalanceInterface {
    increment(income: number): void;
    decrement(outcome: number): void;
}

class Balance implements BalanceInterface {
		private balance: number;

		constructor() {
			this.balance = 0;
		}

    increment(income: number): void {
			this.balance += income;
		}

    decrement(outcome: number): void {
			this.balance -= outcome;
		}
}
```

#### Extends
```
interface Aircraft {
    speed: number;
}

interface Fighter extends Aircraft {
    hasMissiles: boolean;
		missiles?: number;
}

const f22: Fighter = {
	  speed: 2000,
	  hasMissiles: true,
		missiles: 4,
};
```

#### Generics
```
function example<T>(arg: T): T {
	return arg;
}

const value = example<string>("rocketseat");
console.log(value) // irá printar o valor "rocketseat"
```

#### Utility Types
##### Pick<T, K>
Utilizado quando queremos pegar apenas algumas propriedades (K) de uma outra interface (T). Exemplo:
```
interface Video {
    title: string;
    description: string;
		fps: number;
    duration: number;
}

type Image = Pick<Video, 'title' | 'description'>;

const picture: Image = {
    title: 'Profile',
    description: "Picture taken for my driver's license",
};
```

#### Omit<T, K>
Utilizando quando queremos excluir apenas algumas propriedades (K) de uma outra interface (T). Exemplo:
```
interface Video {
    title: string;
    description: string;
		fps: number;
    duration: number;
}

type Image = Omit<Video, 'fps' | 'duration'>;

const picture: Image = {
    title: 'Profile',
    description: "Picture taken for my driver's license",
};
```
