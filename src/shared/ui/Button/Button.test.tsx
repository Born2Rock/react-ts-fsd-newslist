// import {classNames} from "shared/lib/classNames/classNames";
import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from '../Button/Button';

describe('classNames', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test render w class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
