/* eslint-disable @typescript-eslint/default-param-last */
import { Component, h, State, Method, Element, Listen, Prop, Event, EventEmitter } from '@stencil/core';
import { handle, join } from '../common/utils/namespace';
import zIndexTool from '../common/utils/zIndexTool';
import ScaleImage from './scale';

interface IPreviewItem {
  fileType: string;
  path: string;
  title?: string;
}

@Component({
  tag: 'ti-preview',
  styleUrls: {
    pc: 'index.pc.less',
    h5: 'index.h5.less',
  },
  shadow: true,
})
export class TiPreview {
  @Prop() displayNumber = true;

  @Prop() displayTitle = true;

  @State() list: any[] = [];

  @State() index = 0;

  @State() visible = false;

  @State() vertical = false;

  @State() zIndex = Math.max(zIndexTool.getZIndex(), 11000);

  @Element() host!: HTMLElement;

  @Event({ eventName: 'change', composed: false }) changeEvent!: EventEmitter<{ current: number; item: any }>;

  @Method()
  async show(list: IPreviewItem[] = [], index = 0) {
    this.list = list;
    this.index = index;
    this.visible = true;
  }

  @Listen('click')
  close() {
    this.visible = false;
  }

  cache = new Map();

  timer;

  private handleTouchStart(e: TouchEvent) {
    e.preventDefault();
    if (!this.cache.has(e.target)) {
      this.cache.set(e.target, new ScaleImage(e.target as HTMLElement));
    }
    this.cache.get(e.target)?.handleTouchStart(e);
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    } else {
      this.timer = setTimeout(() => {
        this.timer = null;
        this.close();
      }, 300);
    }
  }

  private handleTouchMove(e: TouchEvent) {
    e.preventDefault();

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.cache.get(e.target)?.handleTouchMove(e);
  }

  handleSwiperChange(e: CustomEvent<{ current: number }>) {
    e.preventDefault();
    this.index = e.detail.current;
    this.changeEvent.emit({ current: this.index, item: this.list?.[this.index] });
  }

  render() {
    const { list, index, vertical, visible, displayNumber, displayTitle, zIndex } = this;

    const styles: any = {
      '--protected-preview-z-index': zIndex,
    };

    return (
      <ti-transition
        style={styles}
        name="fade"
        show={visible && list.length > 0}
        destroy-on-exit
        class={`${join('preview', ['mask'])}`}
        onExited={() => {
          this.cache.forEach(value => {
            value?.destroy();
          });
        }}
      >
        <div class={`${handle('preview', ['file-wrap'])}`}>
          <ti-swiper current={this.index} vertical={vertical} onChange={this.handleSwiperChange.bind(this)}>
            {list.map(file => {
              if (file.fileType === 'image') {
                return (
                  <ti-swiper-item>
                    <div class={join('preview', [vertical ? 'file-vertical' : 'file'])}>
                      <img
                        onTouchStart={this.handleTouchStart.bind(this)}
                        onTouchMove={this.handleTouchMove.bind(this)}
                        onTouchEnd={e => this.cache.get(e.target)?.handleTouchEnd(e)}
                        src={file.path}
                        alt={`${index}`}
                        class={join('preview', ['image'])}
                      />
                    </div>
                  </ti-swiper-item>
                );
              }
              return (
                <ti-swiper-item skipHiddenItemLayout={index === 3}>
                  <div class={join('preview', ['file'])}>
                    <video title={file.title} class={join('preview', ['video'])} controls>
                      <source src={file.path} />
                      <p>设备不支持</p>
                      <track kind="captions" />
                    </video>
                    <ti-icon name="close" size={48} color="#fff" ext-class={join('preview', ['close'])} />
                  </div>
                </ti-swiper-item>
              );
            })}
          </ti-swiper>
        </div>
        <div class={`${handle('preview', ['content-box'])}`}>
          {displayTitle ? (
            <div>
              {list.map((file, idx) =>
                file.title ? (
                  <div class={`${join('preview-title', [idx === index ? 'active' : 'hidden'])}`}>{file.title}</div>
                ) : null,
              )}
            </div>
          ) : null}
          {displayNumber ? (
            <div class={`${handle('preview', ['serial-number'])}`}>{`${index + 1}/${list.length}`}</div>
          ) : null}
        </div>
      </ti-transition>
    );
  }
}
