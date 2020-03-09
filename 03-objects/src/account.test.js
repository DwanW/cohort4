import {Account, AccountController} from './account.js';

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

test("is my account controller working?", () => {
    const mainController = new AccountController([]);
    expect(mainController.accArr).toEqual([]);

    mainController.addAcc("Dwan", 520);
    expect(mainController.accArr[0]).toEqual({"accName": "Dwan", "totalBalance": 520});
    mainController.addAcc("rich", 10000);
    expect(mainController.accArr.length).toBe(2);
    mainController.deleteAcc("Dwan");
    expect(mainController.accArr.length).toBe(1);
    mainController.deleteAcc("Kyle");
    expect(mainController.accArr.length).toBe(1);
    expect(mainController.accArr[0]).toEqual({"accName": "rich", "totalBalance": 10000});
    mainController.renameAcc("rich", "Bob");
    expect(mainController.accArr[0]).toEqual({"accName": "Bob", "totalBalance": 10000});
    mainController.renameAcc("Ame", "Bob");
    expect(mainController.accArr[0]).toEqual({"accName": "Bob", "totalBalance": 10000});
    mainController.addAcc("Dwan", 520);
    expect(mainController.getMax()).toBe("Bob");
    expect(mainController.getMin()).toBe("Dwan");
    expect(mainController.getTotal()).toBe(10520);
})