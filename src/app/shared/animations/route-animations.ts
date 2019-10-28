import {
  trigger,
  transition,
  style,
  query, animate, group
} from '@angular/animations';

function fade() {
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)'
      })
    ], {optional: true}),
    query(':enter', [
      animate('600ms ease',
        style({
          opacity: 1,
          transform: 'scale(1) translateY(0)'
        })
      )
    ], {optional: true}),
  ];
}

const optional = {optional: true};
let toTheRight = [
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%'
    })
  ], optional),
  query(':enter', [
    style({right: '-100%'})
  ], optional),
  group([
    query(':leave', [
      animate('600ms ease', style({right: '100%'}))
    ], optional),
    query(':enter', [
      animate('600ms ease', style({right: '0%'}))
    ], optional)
  ])
];

let toTheLeft = [
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ], optional),
  query(':enter', [
    style({left: '-100%'})
  ], optional),
  group([
    query(':leave', [
      animate('600ms ease', style({left: '100%'}))
    ], optional),
    query(':enter', [
      animate('600ms ease', style({left: '0%'}))
    ], optional)
  ])
];

export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', toTheLeft),
    transition('* => isRight', toTheRight),
    transition('isRight => *', toTheLeft),
    transition('isLeft => *', toTheRight),
    // transition('* <=> *', fade())
  ]);


