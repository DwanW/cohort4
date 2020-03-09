import Account from './account.js';

test("is my account working?", () => {
    const dwan = new Account("Dwan", 200);
    expect(dwan.totalBalance).toBe(200);
    expect(dwan.accName).toBe("Dwan");
    expect(dwan.balance()).toBe('Account Dwan total balance: $200');

    dwan.deposit(50);
    console.log(dwan.balance());
    expect(dwan.totalBalance).toBe(250);
    expect(dwan.balance()).toBe('Account Dwan total balance: $250');

    dwan.withdraw(135);
    console.log(dwan.balance());
    expect(dwan.totalBalance).toBe(115);
    expect(dwan.balance()).toBe('Account Dwan total balance: $115');
})