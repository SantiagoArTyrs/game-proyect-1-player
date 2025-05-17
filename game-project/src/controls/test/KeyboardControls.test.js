import KeyboardControls from '../../Experience/Utils/KeyboardControls';

describe('KeyboardControls', () => {
  let keyboard;

  beforeEach(() => {
    keyboard = new KeyboardControls();
  });

  test('debe activar la flecha hacia arriba (ArrowUp)', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    window.dispatchEvent(event);

    expect(keyboard.keys.up).toBe(true);
  });

  test('debe desactivar la flecha hacia arriba (ArrowUp)', () => {
    const down = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    const up = new KeyboardEvent('keyup', { key: 'ArrowUp' });

    window.dispatchEvent(down);
    window.dispatchEvent(up);

    expect(keyboard.keys.up).toBe(false);
  });

  test('debe activar y desactivar la flecha hacia abajo (ArrowDown)', () => {
    const down = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    const up = new KeyboardEvent('keyup', { key: 'ArrowDown' });

    window.dispatchEvent(down);
    expect(keyboard.keys.down).toBe(true);

    window.dispatchEvent(up);
    expect(keyboard.keys.down).toBe(false);
  });

  test('debe activar y desactivar la flecha izquierda (ArrowLeft)', () => {
    const down = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
    const up = new KeyboardEvent('keyup', { key: 'ArrowLeft' });

    window.dispatchEvent(down);
    expect(keyboard.keys.left).toBe(true);

    window.dispatchEvent(up);
    expect(keyboard.keys.left).toBe(false);
  });

  test('debe activar y desactivar la flecha derecha (ArrowRight)', () => {
    const down = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    const up = new KeyboardEvent('keyup', { key: 'ArrowRight' });

    window.dispatchEvent(down);
    expect(keyboard.keys.right).toBe(true);

    window.dispatchEvent(up);
    expect(keyboard.keys.right).toBe(false);
  });

  test('debe activar y desactivar la barra espaciadora (Space)', () => {
    const down = new KeyboardEvent('keydown', { code: 'Space' });
    const up = new KeyboardEvent('keyup', { code: 'Space' });

    window.dispatchEvent(down);
    expect(keyboard.keys.space).toBe(true);

    window.dispatchEvent(up);
    expect(keyboard.keys.space).toBe(false);
  });
});
