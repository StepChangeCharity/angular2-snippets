// "vw" prefix is just to differentiate

export class vwDebt {
	creditor: string = "";
	balance: number = 0.0;
	payment: number = 0.0;
	
	constructor(creditor: string, balance: number, payment: number) {
		this.creditor = creditor;
		this.balance = balance;
		this.payment = payment;
	}
	
}


export class vwExpenditure {
	gas: number = 0;
	electric: number = 0;
	water: number = 0;
}


export class vwIncome {
	work: number = 0;
	benefits: number = 0;
}


export class vwUser {
	firstName: string = "";
	lastName: string = "";
	
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}


export class vwSession {
	user: vwUser = null;
	income: vwIncome = null;
	expenditure: vwExpenditure = null;
	
	constructor() {
		this.user = new vwUser("", "");
		this.income = new vwIncome();
		this.expenditure = new vwExpenditure();
	}
	
	static createDummy(): void {
		let s = new vwSession();
		
		s.user.firstName = "Bob";
		s.user.lastName = "Smith";
		s.income.work = 1200;
		s.income.benefits = 50;
		s.expenditure.gas = 79;
		s.expenditure.electric = 80;
		s.expenditure.water = 81;		
		
		return s;
	}
}