interface TEvented {
    on: string
    off: string
}

interface TDontAddT {
    value: string
}

type GreetingLike = string | number

function myThing(test: TEvented) {
}
function myThing2(test: GreetingLike) {
}


const myEvent: TEvented = { on: 'on', off: 'off' };

const myVar: TDontAddT = {
    value: 'should not get another T appended'
}
