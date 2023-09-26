from bs4 import BeautifulSoup
import json
import re

# Read the HTML file
FILE_PATH = 'perks.html'

with open(FILE_PATH, 'r', encoding='utf-8') as file:
    content = file.read()

soup = BeautifulSoup(content, 'html.parser')

# Define regex patterns
perk_cards_regex = re.compile(r'.*perkFlipCard.*')
section_title_regex = re.compile(r'.*perksSectionTitle.*')
card_front_regex = re.compile(r'.*cardFront.*')
company_name_regex = re.compile(r'.*companyName.*')
deal_text_regex = re.compile(r'.*cardFrontDealText.*')
card_back_regex = re.compile(r'.*cardBack.*')
description_regex = re.compile(r'.*paragraph.*')
image_container_regex = re.compile(r'.*cardTopImageContainer.*')

# Find all the perk sections and cards 
sections = soup.find_all(True, {'class': [section_title_regex, perk_cards_regex]})

perks_by_section = {}
current_section = None

for section in sections:
    # Check if it's a section title
    if section_title_regex.match(section['class'][0]):
        current_section = section.text.strip()
        perks_by_section[current_section] = []
    # If it's a perk card and we have a valid section title
    elif current_section:
        company_name = section.find(class_=company_name_regex).text if section.find(class_=company_name_regex) else None
        deal_text = section.find(class_=deal_text_regex).text if section.find(class_=deal_text_regex) else None
        card_back = section.find(class_=card_back_regex)
        description = card_back.find(class_=description_regex).text if card_back and card_back.find(class_=description_regex) else None
        
        # Extract the image source
        image_container = section.find(class_=image_container_regex)
        image_src = image_container.img['src'] if image_container and image_container.img else None
        
        perk_data = {
            'company_name': company_name,
            'deal_text': deal_text,
            'description': description,
            'image_src': image_src  # Include the image source in the perk data
        }
        if all([value is not None for value in perk_data.values()]):
            perks_by_section[current_section].append(perk_data)

# Saving to JSON
with open('organized_mercury_perks.json', 'w') as f:
    json.dump(perks_by_section, f, indent=4)

print("Scraping complete and saved to organized_mercury_perks.json!")
