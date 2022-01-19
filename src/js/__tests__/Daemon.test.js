import Daemon from '../Daemon';

describe('Daemon class:', () => {
  test('should return object', () => {
    const hero = new Daemon('Daemon');

    const trueHero = {
      name: 'Daemon',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };

    expect(hero).toEqual(trueHero);
  });
});
