import React, { PureComponent } from 'react';

export class Icon extends React.PureComponent {
    translateIcon(icon) {
        if (!icon) {
            return
        }
        let result = icon
            .substr(1, icon.length - 1) // takes values between ""
            .replace(/%3C/g, '<')
            .replace(/%3E/g, '>')
            .replace(/%23/g, '#')
            .replace(/"/g, '')
        result = result
            .substr(result.search(/<svg/g))

        return result
    }

    render() {
        const {
            src, className, ...props
        } = this.props
        const translatedIcon = this.translateIcon(src)

        return (
            <div
                className={className}
                dangerouslySetInnerHTML={{ __html: translatedIcon }}
                {...props}
            />
        )
    }
}

export default Icon