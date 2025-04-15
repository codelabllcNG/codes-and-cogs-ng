import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import {
  Box,
  Input,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

type SkillsInputProps = {
  skills: string[];
  onChange: (updatedSkills: string[]) => void;
};

const SkillsInput: React.FC<SkillsInputProps> = ({ skills, onChange }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const addSkill = (skill: string): void => {
    if (skill && !skills.includes(skill)) {
      onChange([...skills, skill]); // update parent
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (value.endsWith(',')) {
      const skill = value.slice(0, -1).trim();
      addSkill(skill);
      setInputValue('');
    } else {
      setInputValue(value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      addSkill(inputValue.trim());
      setInputValue('');
    }
  };

  const removeSkill = (skillToRemove: string): void => {
    onChange(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <Box>
      <Wrap display={skills.length > 0 ?'flex':'none'} spacing={2} mb={2}>
        {skills.map((skill, index) => (
          <WrapItem key={index}>
            <Tag borderRadius="full" variant="solid" colorScheme="blue">
              <TagLabel>{skill}</TagLabel>
              <TagCloseButton onClick={() => removeSkill(skill)} />
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
      <Input
        placeholder="Type a skill and press comma or Enter"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        h={'60px'}
      />
    </Box>
  );
};

export default SkillsInput;
