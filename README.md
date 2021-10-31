### CSV File Reader Example

Read a CSV file that contains varieities of data

Use std node library fs (Use Type Def file to avoid errors @types/node)

create a util function to convert string to date.

MatchResult enum is used to identify appropriate Flags from the file

MatchDataReader is extracted as a reader specific to the given file type

CsvFileReader is made abstract and generic
