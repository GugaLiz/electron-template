import React, { PureComponent } from 'react';
import cx from 'classnames';
import TouchFeedback from 'rmc-feedback';
const styles = require('./index.less');

export default class Link extends PureComponent {
  lockAsyncAction(action) {
    if (this.locker === true) {
      return;
    }
    this.locker = true;
    const result = action();
    if (result?.then) {
      result.finally(() => {
        this.locker = false;
      });
    } else {
      this.locker = false;
    }
    return result;
  }

  onClick({ audio, clickOnce, lockAsync, onClick, e }) {
    if (audio) {
      this.audioRef.current.play();
    }
    if (clickOnce) {
      this.onClick = f => f;
    }
    if (lockAsync) {
      this.lockAsyncAction(() => onClick(e));
    } else {
      onClick?.(e);
    }
  }

  renderAudio({ audio, preloadAudio }) {
    if (audio) {
      if (!this.audioRef) {
        this.audioRef = React.createRef();
      }
      if (preloadAudio === true) {
        preloadAudio = 'auto';
      }
      if (preloadAudio === false) {
        preloadAudio = undefined;
      }
      return <audio ref={this.audioRef} src={audio} preload={preloadAudio} />;
    }
    return null;
  }

  render() {
    let {
      children,
      className,
      tag: Tag,
      block,
      inlineBlock,
      audio,
      preloadAudio,
      onClick,
      clickOnce,
      lockAsync,
      activeClassName,
      activeStyle,
      disabled,
      disabledClassName,
      clickEffect,
      ...restProps
    } = this.props;
    const clickEffectClassName = {
      opacity: styles.opacity,
      brightness: styles.brightness,
      none: styles.none
    }[clickEffect];
    return (
      <TouchFeedback activeClassName={cx(activeClassName, clickEffectClassName)} activeStyle={activeStyle} disabled={disabled}>
        <Tag
          className={cx(styles.root, className, disabled && styles.disabled, disabled && disabledClassName)}
          style={{ display: block ? 'block' : inlineBlock ? 'inline-block' : undefined }}
          onClick={e =>
            this.onClick({
              audio,
              clickOnce,
              lockAsync,
              onClick,
              e
            })
          }
          {...restProps}
        >
          {children}
          {this.renderAudio({ audio, preloadAudio })}
        </Tag>
      </TouchFeedback>
    );
  }
}

Link.defaultProps = {
  tag: 'a',
  /**
   * clickEffect 有效值: opacity | brightness | none
   */
  clickEffect: 'brightness'
};
