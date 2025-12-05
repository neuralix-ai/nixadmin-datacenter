'use client'

import countries from '@/components/countries_list.json'
import { usePostContact } from '@/hooks/post-contact'
import { ajvResolver } from '@hookform/resolvers/ajv'
import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react'
import { JSONSchemaType } from 'ajv'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { FormInput } from '../../../lib/api/contact/types'

const schema: JSONSchemaType<FormInput> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      errorMessage: {
        minLength: 'Name is required.',
        maxLength: 'Name is too long, it must be less than 100 chars',
      },
    },
    email: {
      type: 'string',
      format: 'email',
      minLength: 1,
      errorMessage: {
        minLength: 'Email is required.',
        format: 'Valid email is required',
      },
    },
    message: {
      type: 'string',
      nullable: true,
      maxLength: 300,
      errorMessage: {
        maxLength: 'Message is too long, It must be less than 300 chars',
      },
    },
    countryCode: {
      type: 'string',
      nullable: true,
    },
    mobile: {
      type: 'string',
      nullable: true,
      pattern: '^[0-9]{7,11}$',
      errorMessage: {
        pattern: 'Enter a valid mobile number.',
      },
    },
    tncAccepted: {
      type: 'boolean',
      anyOf: [
        {
          const: true,
          errorMessage: { const: 'Please agree to the terms and conditions.' },
        },
      ],
    },
  },
  required: ['name', 'email', 'tncAccepted'],
  additionalProperties: false,
}

export default function ContactUsForm() {
  const defaultValues = {
    name: '',
    email: '',
    message: '',
    countryCode: 'IN',
    mobile: '',
    tncAccepted: false,
  }

  const form = useForm<FormInput>({
    resolver: ajvResolver(schema, { strictSchema: false, coerceTypes: true }),
    mode: 'onChange',
    defaultValues,
  })

  const { handleSubmit, control } = form

  const { mutate, isPending } = usePostContact()

  const onSubmit = (data: FormInput) => {
    mutate(data)
  }

  return (
    <FormProvider {...form}>
      <div className='w-full flex flex-col items-center'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className='w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col gap-8'
        >
          <h2 className='block md:hidden text-2xl font-bold text-neutral-800 mb-2 text-center'>
            Contact Our Team
          </h2>
          <Controller
            name='name'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='fullName'
                  className='text-lg font-semibold text-neutral-800'
                >
                  Full Name
                </label>
                <Input
                  errorMessage={error?.message}
                  isInvalid={Boolean(error)}
                  isRequired
                  type='text'
                  placeholder='Enter your full name...'
                  className='flex-1 shrink gap-2.5 self-stretch w-full bg-white border-b border-solid border-b-gray-300 text-gray-700 min-h-[56px]'
                  classNames={{
                    inputWrapper: 'rounded-lg bg-white',
                  }}
                  {...field}
                />
              </div>
            )}
          />
          <Controller
            name='email'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='email'
                  className='text-lg font-semibold text-neutral-800'
                >
                  Email
                </label>
                <Input
                  errorMessage={error?.message}
                  isInvalid={Boolean(error)}
                  isRequired
                  type='email'
                  placeholder='email@example.com'
                  className='flex-1 shrink gap-2.5 self-stretch w-full border-b border-solid border-b-gray-300 text-gray-700 bg-white min-h-[56px]'
                  classNames={{
                    inputWrapper: 'rounded-lg bg-white',
                  }}
                  {...field}
                />
              </div>
            )}
          />

          <div className='flex flex-col gap-2'>
            <label
              htmlFor='phoneNumber'
              className='text-lg font-semibold text-neutral-800'
            >
              Phone Number
            </label>
            <div className='flex flex-row gap-3 items-center w-full'>
              <Controller
                name='countryCode'
                control={control}
                render={({ field: { value, ...field } }) => (
                  <Select
                    items={countries}
                    className='max-w-[90px] flex-1 shrink bg-white'
                    classNames={{
                      popoverContent: 'w-[300px]',
                      innerWrapper: 'pt-[0.125rem]',
                      value: 'text-center',
                      selectorIcon: '-translate-x-[0.25rem] pt-[0.125rem]',
                    }}
                    {...field}
                    selectedKeys={value ? [value] : []}
                    renderValue={items =>
                      items.map(item => (
                        <span key={item.data?.name}>
                          {item.data?.dial_code}
                        </span>
                      ))
                    }
                  >
                    {item => (
                      <SelectItem key={item?.code}>
                        {item.flag} {item.name} ({item.dial_code})
                      </SelectItem>
                    )}
                  </Select>
                )}
              />
              <Controller
                name='mobile'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    errorMessage={error?.message}
                    isInvalid={Boolean(error)}
                    type='mobile'
                    isRequired
                    placeholder='Enter phone number'
                    className='flex-1 shrink text-gray-700 min-h-[26px] bg-white'
                    classNames={{
                      inputWrapper: 'rounded-lg bg-white',
                    }}
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <Controller
            name='message'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='message'
                  className='text-lg font-semibold text-neutral-800'
                >
                  How can we help?
                </label>
                <Textarea
                  errorMessage={error?.message}
                  isInvalid={Boolean(error)}
                  placeholder='Enter your message..'
                  className='flex-1 shrink py-3 text-gray-700 bg-white border-b border-solid border-b-gray-300 size-full'
                  classNames={{
                    inputWrapper: 'rounded-lg bg-white',
                  }}
                  {...field}
                />
              </div>
            )}
          />

          <Controller
            name='tncAccepted'
            control={control}
            render={({
              field: { value, onChange, ...field },
              fieldState: { error },
            }) => (
              <div className='flex flex-col gap-2'>
                <div className='flex gap-x-2 items-start'>
                  <Checkbox
                    classNames={{ icon: 'rounded-none' }}
                    onChange={e => {
                      if (e.target.checked) {
                        e.target.value = 'true'
                      } else {
                        e.target.value = ''
                      }
                      onChange(e)
                    }}
                    {...field}
                  />
                  <p className='text-sm text-default-500'>
                    By contacting us, you agree to our Privacy Policy and Terms
                    of Service
                  </p>
                </div>
                {error && (
                  <p className='text-sm text-danger'>{error.message}</p>
                )}
              </div>
            )}
          />

          <Button
            radius='full'
            color='primary'
            type='submit'
            size='lg'
            isLoading={isPending}
            className='w-full overflow-hidden gap-3 px-6 py-4 mt-2 text-base font-bold leading-loose text-white whitespace-nowrap bg-teal-400 rounded-2xl shadow-md max-md:px-5'
          >
            Submit
          </Button>
        </form>
      </div>
    </FormProvider>
  )
}
