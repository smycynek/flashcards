import { createSignal, onMount, Show, type Component } from 'solid-js';
import styles from './App.module.css';

import { version } from './version';
import { getExpression } from './math';

const App: Component = () => {
  const [showAnswer, setShowAnswer] = createSignal(false);
  const [theExpression, setTheExpression] = createSignal('');
  const [theAnswer, setTheAnswer] = createSignal('');

  const showButtonHandler = () => {
    setShowAnswer(!showAnswer());
  };

  const nextButtonHandler = () => {
    setShowAnswer(false);
    const exp = getExpression();
    setTheExpression(exp[0]);
    setTheAnswer(exp[1]);
  };

  onMount(() => {
    const exp = getExpression();
    setTheExpression(exp[0]);
    setTheAnswer(exp[1]);
  });

  return (
    <div>
      <header class={styles.header}>
        <h1 title="Multiplication with numbers 2 to 12">Flash Cards!</h1>
        <h2>Let's practice!</h2>
      </header>
      <div>
        <p>
          <Show when={!showAnswer()}>
            <div class={styles.exp}>{theExpression()}</div>
          </Show>

          <Show when={showAnswer()}>
            <div class={styles.exp}>{theAnswer()}</div>
          </Show>
        </p>
      </div>
      <header class={styles.header}>
        <div>
          <div class="label">
            <button onClick={showButtonHandler} class="actionButtonWide">
              {showAnswer() ? 'Hide' : 'Show'}
            </button>
            <button onClick={nextButtonHandler} class="actionButtonWide">
              Next
            </button>
          </div>
          <div title="I keep making small tweaks." class="label narrow cite">
            v {version}
          </div>
        </div>

        <div class="label cite">
          <a
            title="More info here. Contact me with questions."
            href="https://github.com/smycynek/flashcards"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/smycynek/flashcards
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;
