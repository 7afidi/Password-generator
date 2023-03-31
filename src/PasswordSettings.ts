export default class PasswordSettings {
    constructor(private _length: number, private _upperCase: boolean, private _lowerCase: boolean, private _number: boolean, private _symbol: boolean) {
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    get upperCase(): boolean {
        return this._upperCase;
    }

    set upperCase(value: boolean) {
        this._upperCase = value;
    }

    get lowerCase(): boolean {
        return this._lowerCase;
    }

    set lowerCase(value: boolean) {
        this._lowerCase = value;
    }

    get number(): boolean {
        return this._number;
    }

    set number(value: boolean) {
        this._number = value;
    }

    get symbol(): boolean {
        return this._symbol;
    }

    set symbol(value: boolean) {
        this._symbol = value;
    }
    generatePassword(): string {

        let charset = "";
        if (this._upperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (this._lowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (this._number) charset += "0123456789";
        if (this._symbol) charset += "!@#$%^&*()_+-={}[];:<>,.?/~";

        let result = "";

        for (let i = 0, n = charset.length; i < this._length; ++i) {
            result += charset.charAt(Math.floor(Math.random() * n));
        }
        return result;
    }


}