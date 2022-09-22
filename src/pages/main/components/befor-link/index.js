import * as React from 'react';
import wrapStore from '@src/utils/wrap-store';
import BeforeLinkStore from './store';
import DateUtil from '../../../../utils/date-util';
import Link from '../../../../components/link';
const styles = require('./index.less');

const BeforeLink = ({store}) => {
  store.use();
  return (
    <div className="link-before-root">
      <div className="link-before-group-1" data-name="连接前">
        <div className="link-before-layer-1" />
        <div className="link-before-group-2" data-name="顶部">
          <div className="link-before-layer-2" />
          <div className="link-before-group-3" data-name="右边">
            <div className="link-before-layer-3" />
          </div>

          <div className="link-before-group-4" data-name="左边">
            <div className="link-before-layer-4" data-name="MetroVPN">
              MetroVPN
            </div>
            <div className="link-before-layer-5" />
          </div>
        </div>

        <div className="link-before-group-5" data-name="内容">
          <Link className="link-before-layer-6" onClick={store.onConnectClick} />
          <div className="link-before-layer-7" />
          <div className="link-before-group-6" data-name="servers">
            <div className="link-before-group-7" data-name="右边">
              <div className="link-before-group-8" data-name="下">
                <div
                  className="link-before-layer-8"
                  data-name="Connect the fastest one from the "
                >
                  Connect the fastest one from the「{store.serverType}」
                </div>
              </div>

              <div
                className="link-before-layer-12"
                data-name="Fastest Servers"
              >
                Fastest Servers
              </div>
            </div>

            <div className="link-before-group-9" data-name="左边">
              <div className="link-before-layer-13" />
            </div>
          </div>

          <div className="link-before-group-10" data-name="time">
            <div className="link-before-group-11" data-name="右边">
              <div className="link-before-group-12" data-name="下">
                <div className="link-before-layer-14" data-name="2022-6-28">
                  {DateUtil.formatDate(new Date(),'yyyy-MM-dd hh:mm:ss')}
                </div>
              </div>

              <div
                className="link-before-layer-16"
                data-name="Last time protection"
              >
                Last time protection
              </div>
            </div>

            <div className="link-before-group-13" data-name="左边">
              <div className="link-before-layer-17" />
            </div>
          </div>

          <div className="link-before-group-14" data-name="cumulative">
            <div className="link-before-group-15" data-name="右边">
              <div className="link-before-layer-18" data-name="18 Days">
                {store.remainDays} Days
              </div>
              <div
                className="link-before-layer-19"
                data-name="Cumulative protection"
              >
                Cumulative protection
              </div>
            </div>

            <div className="link-before-group-16" data-name="左边">
              <div className="link-before-layer-20" />
            </div>
          </div>
        </div>

        <div className="link-before-group-17" data-name="底部">
          <div
            className="link-before-layer-21"
            data-name="IP: 192.168.00.114"
          >
            IP: 192.168.00.114
          </div>
          <div className="link-before-layer-22" />
          <div className="link-before-layer-23" data-name="UNPROTECTED">
            UNPROTECTED
          </div>
          <div className="link-before-layer-24" />
        </div>
      </div>
    </div>
      );
};

export default wrapStore(BeforeLink,BeforeLinkStore);
