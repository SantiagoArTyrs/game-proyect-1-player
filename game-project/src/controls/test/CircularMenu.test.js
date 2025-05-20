import CircularMenu from '../CircularMenu';

describe('CircularMenu', () => {
  let container;
  let menu;

  beforeEach(() => {
    
    container = document.createElement('div');
    document.body.appendChild(container);

    
    menu = new CircularMenu({
      container,
      vrIntegration: { toggleVR: jest.fn() },
      onAudioToggle: jest.fn(),
      onWalkMode: jest.fn(),
      onFullscreen: jest.fn()
    });
  });

  afterEach(() => {
    
    menu.destroy();
    container.remove();
  });

  test('toggleMenu cambia el estado isOpen correctamente', () => {
    expect(menu.isOpen).toBe(false);

    menu.toggleMenu();
    expect(menu.isOpen).toBe(true);

    menu.toggleMenu();
    expect(menu.isOpen).toBe(false);
  });

  test('setStatus actualiza el texto de HUD de puntos', () => {
    menu.setStatus('🎖️ Puntos: 100');
    expect(menu.status.innerText).toBe('🎖️ Puntos: 100');
  });

  test('setTimer actualiza el texto de HUD de tiempo', () => {
    menu.setTimer(42);
    expect(menu.timer.innerText).toBe('⏱ 42s');
  });
});
