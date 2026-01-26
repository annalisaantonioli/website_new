import classNames from 'classnames'

import styles from './Monitor.module.scss'


export default function Monitor({ isOn }: { isOn: boolean }) {
  return (
    <div className='monitor-wrapper relative inline-block mx-auto'>
      <div id="monitor" className={`${styles.monitor} bg-computer rounded-b-lg relative`}>
        <div className='rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />

      </div>
      <div className={`${styles.controls} bg-computer rounded-t-lg rounded-b-sm mx-auto border border-black/70`}>
        <div>
          <span className={classNames('spy-btn', {
            'is-on': isOn
          })} />
        </div>
      </div>
    </div>)
}