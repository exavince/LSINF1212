Feature: Add a reunion

In order to schedule a reunion
As a scout leader
I want to be able to add the reunion to the web site so that the scouts can see it

Scenario: A scout tries to log in while not being registred on the web site yet
Given a scout leader registered on the web site
When the leader adds a reunion
Then the reunion is added the schedule

