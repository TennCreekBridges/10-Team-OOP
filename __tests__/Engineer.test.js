// import Engineer
const Engineer = require("../lib/Engineer");

test('test engineer object', () => {
    const engineer = new Engineer('Thomas Edison', 248, 'BrightIdea@ModernMan.com', 'LightBulbMoment');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});
