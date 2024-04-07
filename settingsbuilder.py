import requests
from bs4 import BeautifulSoup

# Fetching content from the settings file URL
settings_url = "https://raw.githubusercontent.com/torin-stephen/FlocusTweaks/main/settings"
response = requests.get(settings_url)
settings_content = response.text

# Parsing the settings content
settings_lines = settings_content.split("\n")

# Extracting content after "Changelog"
for index, line in enumerate(settings_lines):
    if line.startswith("Changelog:"):
        changelog_index = index + 1
        break
else:
    raise ValueError("Changelog not found in settings")

changelog_content = "\n".join(settings_lines[changelog_index:])

# Fetching content from the HTML file URL
html_url = "https://raw.githubusercontent.com/torin-stephen/FlocusTweaks/main/settings.html"
html_response = requests.get(html_url)
html_content = html_response.text

# Modifying the HTML content
soup = BeautifulSoup(html_content, "html.parser")
changelog_section = soup.find("div", class_="mb-4 col-12")

# Replacing changelog content
changelog_section.clear()
changelog_section.append(BeautifulSoup(changelog_content, "html.parser"))

# Uploading modified HTML content
modified_html_content = str(soup)
with open("modified_settings.html", "w") as file:
    file.write(modified_html_content)

print("Modified HTML content saved to modified_settings.html")
