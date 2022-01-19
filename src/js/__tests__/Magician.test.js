import Magician from '../Magician';

describe('Magician class:', () => {
  test('should return object', () => {
    const hero = new Magician('Magician');

    const trueHero = {
      name: 'Magician',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };

    expect(hero).toEqual(trueHero);
  });
});
