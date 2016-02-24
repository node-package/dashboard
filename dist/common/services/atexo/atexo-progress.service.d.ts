export declare class Progress {
    static instance: Progress;
    static isCreating: Boolean;
    private nbrProgress;
    constructor();
    static getInstance(): Progress;
    getNbrProgress(): number;
    showBackdrop(): number;
    incrementNbrProgress(): void;
    decrementNbrProgress(): void;
}
