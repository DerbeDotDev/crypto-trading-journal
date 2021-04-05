// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { GeistUIThemes, Input as GeistInput, Text } from '@geist-ui/react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// Utils
import makeStyles from '../../utils/makeStyles'

const useStyles = makeStyles((ui: GeistUIThemes) => ({
  label: { marginBottom: ui.layout.gapHalf },
  datePickerWrapper: {
    '& .react-datepicker-wrapper': { width: '100%' },
    '& .react-datepicker__time-container': { overflow: 'hidden' },
    '& .react-datepicker__time-list-item': { color: ui.palette.accents_1 }
  }
}))

type DateTimePickerProps = {
  onChange?: (e: string) => void
  value?: string
  label?: string
  fullWidth?: boolean
}

export default function DateTimePicker({
  onChange,
  value,
  label,
  fullWidth,
  ...rest
}: DateTimePickerProps): JSX.Element {
  const classes = useStyles()

  return (
    <div style={{ width: '100%' }}>
      {label && <Text className={classes.label}>{label}</Text>}
      <div className={fullWidth && classes.datePickerWrapper}>
        <DatePicker
          dateFormat="MMMM d, yyyy h:mm aa"
          showTimeSelect
          timeIntervals={5}
          onChange={onChange}
          selected={value || ''}
          customInput={<GeistInput width={fullWidth && '100%'} {...rest} />}
        />
      </div>
    </div>
  )
}

DateTimePicker.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  fullWidth: PropTypes.bool
}