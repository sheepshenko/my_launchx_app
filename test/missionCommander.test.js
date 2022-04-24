const MissionCommander = require("./../app/missionCommander")

describe("Unit test for Mission Commander Class",() => {
    test('1.- Create a mission commander object:', () => {
        const mc = new MissionCommander("woopa")
        expect(mc.name).toBe("woopas")
    })
})