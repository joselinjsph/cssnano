// flex-flow: <flex-direction> || <flex-wrap>

const flexDirection = [
    'row',
    'row-reverse',
    'column',
    'column-reverse',
];

const flexWrap = [
    'nowrap',
    'wrap',
    'wrap-reverse',
];

export default function normalizeFlexFlow (decl, flexFlow) {
    let order = {
        direction: '',
        wrap: '',
    };
    flexFlow.walk(({value}) => {
        if (~flexDirection.indexOf(value)) {
            order.direction = value;
            return;
        }
        if (~flexWrap.indexOf(value)) {
            order.wrap = value;
            return;
        }
    });
    decl.value = `${order.direction} ${order.wrap}`.trim();
};
