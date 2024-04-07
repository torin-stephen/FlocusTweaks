import sys

def parse_settings_section(sections):
    try:
        settings_index = sections.index('Settings:')
    except ValueError:
        print("Error: 'Settings:' section not found.")
        return None
    
    try:
        settings_content = sections[settings_index + 1]
    except IndexError:
        print("Error: 'Settings:' section found but no content provided.")
        return None

    settings_lines = settings_content.split('\n')
    settings_html = '<h4>Settings</h4>\n<div class="row">\n'
    for line in settings_lines:
        if line.strip():  # Ignore empty lines
            try:
                option, description = line.split(':', 1)
                option_id = option.strip().replace(' ', '-').lower()
                settings_html += f'<div class="mb-4 col-12">\n'
                settings_html += f'<div class="form-check form-switch">\n'
                settings_html += f'<input class="form-check-input" type="checkbox" id="{option_id}">\n'
                settings_html += f'<label class="form-check-label" for="{option_id}">\n'
                settings_html += f'{option.strip()}\n'
                settings_html += f'<div class="text-secondary">{description.strip()}</div>\n'
                settings_html += f'</label>\n'
                settings_html += f'</div>\n'
                settings_html += f'</div>\n'
            except ValueError:
                print(f"Error: Malformed line in 'Settings:' section: {line}")
                return None
    settings_html += '</div>\n'
    return settings_html

def generate_html(input_text):
    sections = input_text.split('\n\n')

    html_output = '<h3>Flocus Tweaks</h3>\n'

    settings_html = parse_settings_section(sections)
    if settings_html is not None:
        html_output += settings_html + '\n<hr>\n'
    else:
        return None

    # Parse other sections as needed...

    return html_output

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python generate_html.py <input_text>")
        sys.exit(1)
    
    input_text = sys.argv[1]
    html_output = generate_html(input_text)
    if html_output is not None:
        print(html_output)
    else:
        print("Error: HTML generation failed.")
