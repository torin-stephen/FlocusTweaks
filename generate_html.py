import sys

def generate_html(input_text):
    sections = input_text.split('\n\n')

    try:
        settings_section = sections[sections.index('Settings:') + 1]
    except ValueError:
        print("Error: 'Settings:' section not found in input text.")
        return ""

    settings_lines = settings_section.split('\n')
    settings_html = '<h4>Settings</h4>\n<div class="row">\n'
    for line in settings_lines:
        if line.strip():  # Ignore empty lines
            option, description = line.split(':')
            option_id = option.replace(' ', '-').lower()
            settings_html += f'<div class="mb-4 col-12">\n'
            settings_html += f'<div class="form-check form-switch">\n'
            settings_html += f'<input class="form-check-input" type="checkbox" id="{option_id}">\n'
            settings_html += f'<label class="form-check-label" for="{option_id}">\n'
            settings_html += f'{option.strip()}\n'
            settings_html += f'<div class="text-secondary">{description.strip()}</div>\n'
            settings_html += f'</label>\n'
            settings_html += f'</div>\n'
            settings_html += f'</div>\n'
    settings_html += '</div>\n'

    # Parse other sections as needed...

    # Combine all HTML sections
    html_output = f'<h3>Flocus Tweaks</h3>\n{settings_html}\n<hr>\n'

    return html_output

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python generate_html.py <input_text>")
        sys.exit(1)
    
    input_text = sys.argv[1]
    html_output = generate_html(input_text)
    print(html_output)
